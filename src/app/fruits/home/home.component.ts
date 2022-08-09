import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allFruits: Fruits[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private fruitService: FruitsService ,private router:Router) { }

  ngOnInit(): void {
    this.get();
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );


  }
  get() {
    this.fruitService.get().subscribe((data) => {
      this.allFruits = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.fruitService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allFruits = this.allFruits.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
