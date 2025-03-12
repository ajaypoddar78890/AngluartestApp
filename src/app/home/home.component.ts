import { Component } from '@angular/core';
import { GreeterComponent } from '../componants/greeter/greeter.component';
import { CounterComponent } from '../componants/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreeterComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  counter: number = 0;

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}

// export class HomeComponent {
//   counter: number = 0; // ✅ Properly declared property

//   increaseCounter() {
//     this.counter++; // ✅ Increment counter
//   }

//   decreaseCounter() {
//     if (this.counter > 0) {
//       this.counter--; // ✅ Decrement counter
//     }
//   }
// }
