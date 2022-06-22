import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from 'src/app/models/contacto';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2';

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
    id: string | null;
    titulo_registro = 'Regitrarse'

    constructor(private fb: FormBuilder, private _contactoService: ContactoService, private router: Router, private idRoute: ActivatedRoute) {
        this.usuarioForm = this.fb.group({
            correo: ['', [Validators.required, Validators.pattern(this.reyexCorreo)]],
            nombres: ['',[Validators.required, Validators.pattern(this.regexLetra)]],
            apellidos: ['',[Validators.required, Validators.pattern(this.regexLetra)]],
            contrasena: ['',Validators.required],
            edad: ['',[Validators.required, Validators.pattern(this.reyexNumero)]]

        })

        this.id = this.idRoute.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
        this.accionSolicitada();
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

        if (this.id !== null) {
            this._contactoService.putContacto(this.id, contactoUsuario).subscribe(data=>{
                this.router.navigate(['admin'])
                Swal.fire({
					title: 'Datos actualizados!',
					text: 'Se guardaron los cambios',
					icon: 'success',
					confirmButtonText: 'Vale'
				})
            },error=>{})
        }else{
            this._contactoService.postContacto(contactoUsuario).subscribe(data => {
                this.router.navigate(['/mensaje-enviado'])
            }, error => {
                console.log(error)
            })
        }
    }

    accionSolicitada(){
        if(this.id !== null){
            this.titulo_registro = "Actualizar datos"
            this._contactoService.getContacto(this.id).subscribe(data=>{
                this.usuarioForm.setValue({
                    correo: data.correo,
                    nombres: data.nombres,
                    apellidos: data.apellidos,
                    contrasena: data.contrasena,
                    edad: data.edad
                })
            },error=>{
                console.log(error)
            })
        }
    }

    }



