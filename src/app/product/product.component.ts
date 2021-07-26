import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  items = [
    {
      "productID": 1,
      "productName": "Shirt 1",
      "productPrice": 300,
      "productURL": ""
    },
    {
      "productID": 1,
      "productName": "Shirt 1",
      "productPrice": 300,
      "productURL": ""
    },
    {
      "productID": 1,
      "productName": "Shirt 1",
      "productPrice": 300,
      "productURL": ""
    },
    {
      "productID": 1,
      "productName": "Shirt 1",
      "productPrice": 300,
      "productURL": ""
    },
    {
      "productID": 1,
      "productName": "Shirt 1",
      "productPrice": 300,
      "productURL": ""
    },
    {
      "productID": 1,
      "productName": "Shirt 1",
      "productPrice": 300,
      "productURL": ""
    },
    {
      "productID": 1,
      "productName": "Shirt 1",
      "productPrice": 300,
      "productURL": ""
    },
    {
      "productID": 1,
      "productName": "Shirt 1",
      "productPrice": 300,
      "productURL": ""
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
