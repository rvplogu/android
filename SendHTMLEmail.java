package com.greglturnquist.payroll;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendHTMLEmail {

   public static void main(String [] args) throws MessagingException {
      // Recipient's email ID needs to be mentioned.
      String to = "rvplogu@gmail.com";

      // Sender's email ID needs to be mentioned

      // Assuming you are sending email from localhost
      String subject = "subject";
      String msg ="email text....";
      final String from ="prbulg2412@gmail.com";
      final  String password ="";


      Properties props = new Properties();  
      props.setProperty("mail.transport.protocol", "smtp");     
      props.setProperty("mail.host", "smtp.gmail.com");  
      props.put("mail.smtp.auth", "true");  
      props.put("mail.smtp.port", "465");  
      props.put("mail.debug", "true");  
      props.put("mail.smtp.socketFactory.port", "465");  
      props.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");  
      props.put("mail.smtp.socketFactory.fallback", "false");  
      Session session = Session.getDefaultInstance(props,  
      new javax.mail.Authenticator() {
         protected PasswordAuthentication getPasswordAuthentication() {  
         return new PasswordAuthentication(from,password);  
     }  
     });  

     //session.setDebug(true);  
     Transport transport = session.getTransport();  
     InternetAddress addressFrom = new InternetAddress(from);  

     MimeMessage message = new MimeMessage(session);  
     message.setSender(addressFrom);  
     message.setSubject(subject);  
     message.setContent(msg, "text/plain");  
     message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));  

     transport.connect();  
     Transport.send(message);  
     transport.close();
     } 
   }
