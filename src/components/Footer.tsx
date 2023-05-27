import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

export const Footer = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Typography variant="h6" align="center" gutterBottom>
          Реквізити
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          color="text.secondary"
          component="div"
        >
          Дякуємо, що рухаєте світ. Якщо хочете підтримати проєкт, реквізити
          тут:
          <br />
          Картка Приват - 5168 7451 0561 4421 (Антон Сененко) <br />
          PayPal - senenkoanton@gmail.com
          <br />
          Детальні реквізити: <br />
          Установа банку - ПриватБанк
          <br />
          МФО банку - 305299 <br />
          Отримувач платежу - СЕНЕНКО АНТОН ІГОРОВИЧ
          <br />
          IBAN - UA953052990000026201691360906 <br />
          Рахунок отримувача - 26201691360906
          <br />
          Валюта картки - UAH <br />
          РНОКПП отримувача - 3136215494
          <br />
          Призначення платежу - Поповнення рахунку СЕНЕНКО АНТОН ІГОРОВИЧ,
          безповоротна фінансова/благодійна допомога ЗСУ)
          <br />
          <br />
          Принагідно лишаю реквізити Мартин Брест, з яким ми разом реалізуємо
          проєкт:
          <br />
          Моно: 4441114443028624
          <br />
          PayPal: Oleg.boldyriev@gmail.com
          <br />
          Приват: 4149499371016518
        </Typography>
      </Container>
    </Box>
  );
};
