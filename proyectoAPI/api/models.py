from django.db import models
from .choices import pagos, status
# Create your models here.

# Clase Cliente
class Cliente(models.Model):
    name = models.CharField(max_length=20)
    apellidos = models.CharField(max_length=20)
    fechaNacimiento = models.CharField(max_length=30)
    rfc = models.CharField(max_length=13)
    correo = models.CharField(max_length=50)
    telefono = models.CharField(max_length=10)
    password = models.CharField(max_length=12)
    rol = models.CharField(max_length=1)

    def __str__(self):
        return self.name

# Clase Empleado
class Empleado(models.Model):
    name = models.CharField(max_length=20)
    apellidos = models.CharField(max_length=20)
    fechaNacimiento = models.CharField(max_length=30)
    rfc = models.CharField(max_length=13)
    correo = models.CharField(max_length=50)
    telefono = models.CharField(max_length=10)
    password = models.CharField(max_length=12)
    rol = models.CharField(max_length=1)


# Clase prestamo
class Prestamo(models.Model):
    status = models.CharField(max_length=9, choices=status, default='Inactivo')
    monto = models.FloatField(default=0)
    pagos = models.CharField(max_length=9, choices=pagos, default='Semanal')
    cliente = models.ForeignKey(Cliente,null=True,blank=True,on_delete=models.CASCADE)


# Procentaje
class Porcentaje(models.Model):
    porcetanje = models.FloatField(default=0)
    status = models.CharField(max_length=9, choices=status, default='Inactivo')
    prestamo = models.ForeignKey(Prestamo,null=True,blank=True,on_delete=models.CASCADE)
  

# Clase Referencia
class Referencia(models.Model):
    personales_exists = models.BooleanField(choices=[(True, 'S'), (False, 'N')])
    crediticias_exists = models.BooleanField(choices=[(True, 'S'), (False, 'N')])
    bancarias_exists = models.BooleanField(choices=[(True, 'S'), (False, 'N')])
    laborales_exists = models.BooleanField(choices=[(True, 'S'), (False, 'N')])
    cliente = models.ForeignKey(Cliente,null=True,blank=True,on_delete=models.CASCADE)
