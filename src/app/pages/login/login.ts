import { Component } from '@angular/core';
import { AuthService } from '../../core/auth';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
        // Django ya creó la sesión; redirigimos al path que regresó el backend
        // p.ej. res.redirect === "/consulta/"
        window.location.href = `http://127.0.0.1:8000${res.redirect}`;
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
