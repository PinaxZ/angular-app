import { Component } from '@angular/core';
import { AuthService } from '../../core/auth'; // o '../../core/auth.service' según tu ruta real
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loading = false;
  error = '';
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.loading = true;
    this.error = '';

    const { username, password } = this.form.value;

    this.auth.login(username!, password!).subscribe({
      next: (res) => {
        // Django ya creó la sesión; redirigimos al path que regresa el backend (p.ej. "/consulta/")
        window.location.href = `${environment.API_URL}${res.redirect}`;
      },
      error: (err) => {
        console.error('LOGIN ERROR =>', err.status, err.error);
        this.error = err?.error?.detail || 'Credenciales inválidas';
        this.loading = false;
      }
    });
  }

  loginWith(p: 'facebook'|'google') {
    alert(`Login con ${p} (placeholder)`);
  }
}
