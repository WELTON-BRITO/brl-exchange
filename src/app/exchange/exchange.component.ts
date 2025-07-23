import { Component } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';

@Component({
    selector: 'app-exchange',
    templateUrl: './exchange.component.html',
    styleUrls: ['./exchange.component.css'],
})
export class ExchangeComponent {
    currencyCode: string = '';
    currentRate: any;
    dailyRates: any[] = [];
    showHistory = false;
    timestamp: string = '';
    conversionValue: number | null = null;
    showLast30Days = false;
    last30Days: string[] = [];
    apiError = false;
    errorMessage: string;

    constructor(private exchangeService: ExchangeService) {
        this.generateLast30Days();
    }

    getCurrentRate() {

        this.dailyRates = [];
        this.conversionValue = null;
        this.showLast30Days = false;
        this.apiError = false;
        this.exchangeService.getCurrentExchangeRate('BRL', this.currencyCode).subscribe(data => {
            this.currentRate = data;
            this.timestamp = new Date().toLocaleString();
        });
    }

    getDailyRates() {
        this.exchangeService.getDailyExchangeRate('BRL', this.currencyCode).subscribe({
            next: (data) => {
                const today = new Date();
                const past30Days = new Date();
                past30Days.setDate(today.getDate() - 30);

                const last30DaysRates = data.data.filter((rate: any) => {
                const rateDate = new Date(rate.date);
                return rateDate >= past30Days && rateDate <= today;
                });

                last30DaysRates.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

                last30DaysRates.forEach((rate: any) => {
                rate.dateFormatted = new Date(rate.date).toLocaleDateString('pt-BR');
                });

                this.dailyRates = this.calculateDifferences(last30DaysRates);
                this.showHistory = true;
                this.apiError = false; // reseta o erro, se existir
            },
            error: (err) => {
                if (err.status === 500) {
                this.apiError = true;
                this.errorMessage = 'Moeda inválida do país.';
                } else {
                this.apiError = true;
                this.errorMessage = 'Erro ao buscar dados da API.';
                }
            }
        });
    }

    calculateDifferences(rates: any[]): any[] {
        return rates.map((rate, index) => {
            const previous = rates[index + 1]?.close || rate.close;
            const diffPercent = ((rate.close - previous) / previous) * 100;

            return {
                ...rate,
                closeDiff: +diffPercent.toFixed(4)
            };
        });
    }

    toggleLast30Days() {
        this.showLast30Days = !this.showLast30Days;

        if (this.showLast30Days && this.currencyCode) {
            this.getDailyRates();
        }
    }

    private generateLast30Days() {
        const today = new Date();
        for (let i = 0; i < 30; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            this.last30Days.push(date.toLocaleDateString('pt-BR'));
        }
    }

    allowOnlyLetters(event: KeyboardEvent): void {
        const inputChar = event.key;
        const regex = /^[a-zA-Z]$/;

        if (!regex.test(inputChar)) {
            event.preventDefault();
        }
    }

    transformToUppercase(): void {
        if (this.currencyCode) {
            this.currencyCode = this.currencyCode.toUpperCase();
        }
    }

    clearLast30Days(event: Event): void {
        event.stopPropagation(); // impede que o clique dispare o toggle

        this.dailyRates = [];
        this.conversionValue = null;
        this.showLast30Days = false;
    }

}
