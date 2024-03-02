from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from email.message import EmailMessage
import ssl
import smtplib
# Create your views here.


class ContactoView(APIView):
    def post(self, request):
        oficina = ''
        datos = []
        for req in request.data:
            dato = req + ': ' + str(request.data[req])
            if req == 'oficina':
                oficina = str(request.data[req])
            else:
                datos.append(dato)

        email_emisor = 'potenteinmobiliariaemailsender@gmail.com'
        email_contraseña = 'loqdoczbbzrypxts'
        email_receptor = 'maxicobeagaprc@gmail.com'

        # if oficina == 'Cordoba 3719':
        #     email_receptor = 'info@potenteprop.com.ar'
        # else:
        #     email_receptor = 'potentemogotes@pimas.com.ar'

        asunto = 'Consulta de cliente'
        cuerpo = ' - '.join(map(str, datos))

        em = EmailMessage()
        em['From'] = email_emisor
        em['To'] = email_receptor
        em['Subject'] = asunto
        em.set_content(cuerpo)

        context = ssl.create_default_context()
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_emisor, email_contraseña)
            smtp.sendmail(email_emisor, email_receptor, em.as_string())

        return Response({'data': request.data})
