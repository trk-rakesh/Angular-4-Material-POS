import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';
import { Upload } from '../../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  productTypes = ['Drink', 'Food'];
  addItemActive = false;

  newItemPrice: number;
  newItemName: string;
  newItemType: string;

  products = [];

  food;
  drink;
  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.products[0] = this.db.getFood();
    this.products[1] = this.db.getDrink();

  }

  addItemToggle() {
    this.newItemPrice = null;
    this.newItemName = null;
    this.newItemType = null;
    if (this.addItemActive === true) {
      this.addItemActive = false;
    } else {
      this.addItemActive = true;
    }
  }

  addItem() {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.db.pushUpload(this.newItemName, this.newItemPrice, this.newItemType, this.currentUpload);
    this.newItemName = null;
    this.newItemPrice = null;
    this.newItemType = null;
    this.selectedFiles = null;
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  updateItem(id, name, price, item_type) {
    this.newItemName = name;
    this.newItemPrice = Number(price);
    this.newItemType = item_type;
    this.db.updateItem(id, {
      name: this.newItemName,
      price: this.newItemPrice,
      item_type: this.newItemType,
      quantity: 1 });
  }

  deleteItem(id, type, img) {
    this.db.deleteItem(id, type, img);
  }

}
