import { Component } from '@angular/core';

@Component({
  selector: 'app-tambola',
  standalone: true,
  templateUrl: './tambola.component.html',
  styleUrls: ['./tambola.component.css']
})
export class TambolaComponent {
  ticket: (number | null)[][] = [];

  constructor() {
    this.generateTicket();
  }

  generateTicket() {
    // Generate a basic Tambola ticket: 3 rows x 9 columns
    // Each row has 5 numbers and 4 blanks
    const columns: number[][] = [];
    for (let col = 0; col < 9; col++) {
      // Each column has numbers in a specific range
      const start = col * 10 + 1;
      const end = col === 8 ? 90 : start + 9;
      const nums = [];
      for (let n = start; n <= end; n++) nums.push(n);
      columns.push(this.shuffle(nums).slice(0, 3));
    }

    // Build ticket rows
    const ticket: (number | null)[][] = Array.from({ length: 3 }, () => Array(9).fill(null));
    for (let col = 0; col < 9; col++) {
      for (let row = 0; row < 3; row++) {
        ticket[row][col] = columns[col][row];
      }
    }

    // For each row, randomly blank out 4 cells (leave 5 numbers)
    for (let row = 0; row < 3; row++) {
      const blankIndices = this.shuffle([...Array(9).keys()]).slice(0, 4);
      for (const idx of blankIndices) {
        ticket[row][idx] = null;
      }
    }
    this.ticket = ticket;
  }

  shuffle(arr: any[]): any[] {
    // Fisher-Yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
