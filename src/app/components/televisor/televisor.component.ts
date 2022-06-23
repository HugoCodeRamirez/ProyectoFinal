import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-televisor',
  templateUrl: './televisor.component.html',
  styleUrls: ['./televisor.component.css']
})
export class TelevisorComponent implements OnInit {

  televisorForm:FormGroup;
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  regexNumero = /^[0-9]+$/;
  regexLetra = /^[a-zA-Z\s]+$/;
  id:string|null;
  constructor(private fb:FormBuilder,private router:Router,private idRoute:ActivatedRoute) {
    this.televisorForm=this.fb.group({
      marca:['',[Validators.required,Validators.pattern(this.regexLetra)]],
      tamanopantalla:['',[Validators.required]],
      tipopantalla:['',[Validators.required,Validators.pattern(this.regexLetra)]],
      precio:['',[Validators.required,Validators.pattern(this.regexNumero),Validators.minLength(6)]]
    })
    this.id=this.idRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
  }


  agregarTelevisor(){
    console.log(this.televisorForm)
  }
}
