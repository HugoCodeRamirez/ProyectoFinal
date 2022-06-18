import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from 'src/app/models/contacto';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    usuarioForm: FormGroup;
    reyexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    reyexNumero = /^[0-9]+$/;
    regexLetra = /^[a-zA-Z\s]+$/;

    constructor(private fb: FormBuilder) {
        this.usuarioForm = this.fb.group({
            correo: ['', [Validators.required, Validators.pattern(this.reyexCorreo)]],
            nombres: ['',[Validators.required, Validators.pattern(this.regexLetra)]],
            apellidos: ['',[Validators.required, Validators.pattern(this.regexLetra)]],
            contrasena: ['',Validators.required],
            edad: ['',[Validators.required, Validators.pattern(this.reyexNumero)]]

        })
    }

    ngOnInit(): void {
    }

    guardarUsuario(){
        const contactoUsuario: Contacto = {
            correo: this.usuarioForm.get('correo')?.value,
            nombres: this.usuarioForm.get('nombres')?.value,
            apellidos: this.usuarioForm.get('apellidos')?.value,
            contrasena: this.usuarioForm.get('contrasena')?.value,
            edad: this.usuarioForm.get('edad')?.value
        }
        console.log(contactoUsuario)
    }

}
