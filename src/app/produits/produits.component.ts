import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  standalone: true,
imports: [CommonModule,RouterLink],
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {
  produits:Produit[];
  constructor(private produitService : ProduitService){
  this.produits=[];
}
ngOnInit(): void {
  this.produits=this.produitService.listeProduits();
}
supprimerProduit(prod:Produit){
  //console.log(prod); 
  let conf=confirm("etes-vous sur ?");
  if(conf){
    this.produitService.supprimerProduit(prod);
  }
  
}
}
