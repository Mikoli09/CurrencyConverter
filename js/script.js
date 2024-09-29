{
    const amount = document.querySelector(".js-form__amount");

    const roundValue = (value) => {
        if (Number.isInteger(value)) {
            return value
        }
        else {
            return value.toFixed(2);
        };
    };


    const toSubcurrencyConversion = (toConvert, convertedTo) => {

        if (toConvert == convertedTo)
            return +amount.value;
        else {
            if (toConvert == 'EUR') {
                return +amount.value
            }
            else if (toConvert == 'PLN') {
                return +amount.value * 0.2359
            }
            else if (toConvert == 'USD') {
                return +amount.value * 0.9022
            }
        }
    };


    const toTargetCurrencyConversion = (targetCurrency, intermediateResult) => {

        if (targetCurrency == 'EUR') {
            return intermediateResult
        }
        else if (targetCurrency == 'PLN') {
            return intermediateResult * 4.2383
        }
        else if (targetCurrency == 'USD') {
            return intermediateResult * 1.1084
        }
    }

    const resultTextUpdate = (amount, toConvert, converted, result) => {
        const resultText = document.querySelector(".js-form__resultParagraph");

        resultText.innerText = (`${amount.value} ${toConvert.value} = ${roundValue(result)} ${converted.value} `);
    };

    
    const onFormSubmit = event => {
        event.preventDefault();

        const currencyToConvert = document.querySelector(".js-form__selectToConvert");
        const currencyConverted = document.querySelector(".js-form__selectConverted");
        let result;


        if (currencyToConvert.value !== currencyConverted.value) {
            result = toTargetCurrencyConversion(currencyConverted.value, toSubcurrencyConversion(currencyToConvert.value, currencyConverted.value));
        }
        else {
            result = +amount.value
        };

        resultTextUpdate(amount, currencyToConvert, currencyConverted, result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();

};

