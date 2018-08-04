import { Component } from '@angular/core';

declare var require: any;
const { version } = require('package.json');
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public input1 = 0;
    public input2 = 0;
    public operator = '';
    public app_version = version;

    add(input1: number, input2: number): number {
        return input1 + input2;
    }

    subtract(input1: number, input2: number): number {
        return input1 - input2;
    }

    multiply(input1: number, input2: number): number {
        return input1 * input2;
    }

    divide(input1: number, input2: number): number {
        return input1 / input2;
    }

    percent(): void {
        this.input1 = this.input1 / 100;
    }

    calculate(): number {
        switch (this.operator) {
            case 'add':
                return this.add(this.input1, this.input2);
            case 'subtract':
                return this.subtract(this.input1, this.input2);
            case 'multiply':
                return this.multiply(this.input1, this.input2);
            case 'divide':
                return this.divide(this.input1, this.input2);
            default:
                return 0;
        }
    }

    setInput(num: number) {
        const temp = parseInt(this.input1.toString() + num.toString(), 10);

        // Block number from being larger than 8 figures
        if (temp / Math.pow(10, 8) >= 1) {
            return;
        }
        if (!this.operator) {
            // Set Input 1
            this.input1 = parseInt(this.input1.toString() + num.toString(), 10);
        } else {
            // Set Input 2
            this.input2 = parseInt(this.input2.toString() + num.toString(), 10);
        }
    }

    equals() {
        this.input1 = this.calculate();
        this.input2 = 0;
        this.operator = '';
    }

    displayNumber() {
        let returnNumber: number;
        if (this.operator && this.input2) {
            returnNumber = this.input2;
        }
        returnNumber = this.input1;
        return returnNumber.toLocaleString('en');
    }

    setOperator(operator: string) {
        this.operator = operator;
    }

    clear() {
        this.input1 = 0;
        this.input2 = 0;
        this.operator = '';
    }
}
