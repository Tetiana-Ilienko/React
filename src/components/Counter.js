import React, { useState } from "react";

const Counter = () => {
    // React.useState(0);

    /*
    Этот код использует хук состояния useState в React. Давайте разберем каждую часть:

useState(0):

Это вызов хука состояния useState с начальным значением 0.
Хук возвращает массив из двух элементов:
Первый элемент (count в данном случае) представляет собой текущее значение состояния.
Второй элемент (setCount в данном случае) - это функция для обновления состояния.
const [count, setCount] = ...;:

Деструктуризация массива, возвращаемого useState, чтобы присвоить значения переменным count и setCount.
Таким образом, после выполнения этой строки кода, count будет содержать текущее значение состояния 
(в данном случае, начальное значение 0), и setCount будет функцией, которую вы можете использовать 
для обновления этого состояния.
    */
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </>
    );
}

export default Counter;