import { Component } from '@angular/core';
import { THIS_EXPR } from '../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    public input1 = 0;
    public input2 = 0;
    public operator = '';

    private _displayNumber = 0;

    add (input1: number, input2: number): number {
        return input1 + input2;
    }

    subtract (input1: number, input2: number): number {
        return input1 - input2;
    }

    multiply (input1: number, input2: number): number {
        return input1 * input2;
    }

    divide (input1: number, input2: number): number {
        return input1 / input2;
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
        if (this.operator && this.input2) {
            return this.input2;
        }
        return this.input1;
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
