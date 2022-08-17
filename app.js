const accountHolders = [
	{
		name: 'Sabbir Hossain',
		email: 'sabbir@gmail.com',
		password: 'sabbir001',
		balance: 4050,
		deposit: 0,
		withdraw: 0,
	},
	{
		name: 'Rahat Hossain',
		email: 'rahat@gmail.com',
		password: 'rahat001',
		balance: 8020,
		deposit: 300,
		withdraw: 0,
	},
	{
		name: 'Saad Ahammed',
		email: 'saad@gmail.com',
		password: 'saad489',
		balance: 5600,
		deposit: 0,
		withdraw: 1000,
	},
	{
		name: 'Rabbi Mia',
		email: 'rabbi@gmail.com',
		password: 'rabbiMia',
		balance: 399993,
		deposit: 599,
		withdraw: 4675,
	},
	{
		name: 'Nur Mohammad',
		email: 'nur@gmail.com',
		password: 'nur8337',
		balance: 386797,
		deposit: 2342,
		withdraw: 9788,
	},
	{
		name: 'Ahammed Abdullha',
		email: 'abdullha@gmail.com',
		password: 'aBduLlha00#4$',
		balance: 302,
		deposit: 4,
		withdraw: 50,
	},
];
const homePage = document.getElementById('home-page');
const bankPage = document.getElementById('bank-page');
const userName = document.getElementById('user-name');
const loginButton = document.getElementById('login-button');
const accountBalance = document.getElementById('account-balance');
const withdrawBalance = document.getElementById('withdraw-balance');
const depositBalance = document.getElementById('deposit-balance');
const authAlert = document.getElementById('auth-alert');

let accountHolder = {};

loginButton.addEventListener('click', () => {
	const emailBox = document.getElementById('email-box');
	const passwordBox = document.getElementById('password-box');
	const emailValue = emailBox.value;
	const passwordValue = passwordBox.value;

	for (let i = 0; i < accountHolders.length; i++) {
		accountHolder = accountHolders[i];
		if (
			accountHolder.email === emailValue &&
			accountHolder.password === passwordValue
		) {
			homePage.classList.add('hidden');
			bankPage.classList.remove('hidden');
			userName.innerText = accountHolder.name;
			accountBalance.innerText = accountHolder.balance;
			depositBalance.innerText = accountHolder.deposit;
			withdrawBalance.innerText = accountHolder.withdraw;
		} else {
			authAlert.classList.remove('invisible');
			setTimeout(() => {
				authAlert.classList.add('invisible');
			}, 3000);
		}
	}
});

const depositAmount = document.getElementById('deposit-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
const depositButton = document.getElementById('deposit-button');
const withdrawButton = document.getElementById('withdraw-button');

depositButton.addEventListener('click', () => {
	const depositValue = parseFloat(depositAmount.value);
	if (depositValue > 0) {
		accountHolder.balance += depositValue;
		accountHolder.deposit += depositValue;
		accountBalance.innerText = accountHolder.balance;
		depositBalance.innerText = accountHolder.deposit;

		depositAmount.value = '';
	} else {
		alert('Enter Correct Amount');
		depositAmount.value = '';
	}
});
withdrawButton.addEventListener('click', () => {
	const withdrawValue = parseFloat(withdrawAmount.value);
	if (withdrawValue > 0 && accountHolder.balance >= withdrawValue) {
		accountHolder.balance -= withdrawValue;
		accountHolder.withdraw += withdrawValue;
		accountBalance.innerText = accountHolder.balance;
		withdrawBalance.innerText = accountHolder.withdraw;

		withdrawAmount.value = '';
	} else if (withdrawValue < 0) {
		alert('Enter Correct Amount');
		withdrawAmount.value = '';
	} else {
		alert("you don't have that much money");
		withdrawAmount.value = '';
	}
});

const accountHolderContainer = document.getElementById('account-holder-container');
accountHolders.forEach((accountHolder) => {
    const account = document.createElement('div')
    account.innerHTML = `<div class="bg-white p-5 rounded-xl">
                        <h4 class="text-2xl font-bold">${accountHolder.name}</h4>
                        <p><span class="font-bold">Email:</span> ${accountHolder.email}</p>
                        <p><span class="font-bold">Password:</span> ${accountHolder.password}</p>
                        <p><span class="font-bold">Balance:</span> $${accountHolder.balance}</p>
                        <p><span class="font-bold">Total Deposit:</span> $${accountHolder.deposit}</p>
                        <p><span class="font-bold">Total Withdraw:</span> $${accountHolder.withdraw}</p>
                    </div>`;
    
    accountHolderContainer.appendChild(account)
});
