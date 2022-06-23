import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  consolaForm:FormGroup;
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  regexNumero = /^[0-9]+$/;
  regexLetra = /^[a-zA-Z\s]+$/;
  id:string|null;
  constructor(private fb:FormBuilder,private router:Router,private idRoute:ActivatedRoute) {
    this.consolaForm=this.fb.group({
      marca:['',[Validators.required,Validators.pattern(this.regexLetra)]],
      tipodecontroles:['',[Validators.required]],
      controlesincluidos:['',[Validators.required,Validators.pattern(this.regexLetra),Validators.maxLength(2)]],
      precio:['',[Validators.required,Validators.pattern(this.regexNumero),Validators.minLength(5)]]
    })
    this.id=this.idRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
  }

}
