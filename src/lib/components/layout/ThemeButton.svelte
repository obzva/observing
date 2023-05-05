<script>
	export let isLight;
	$: iconColor = isLight ? '#313135' : '#ffffff';
</script>

<button class={isLight ? 'light' : 'dark'} on:click>
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C14.5007 19 16.6951 17.6887 17.9331 15.7163C17.122 16.1218 16.2066 16.35 15.2375 16.35C11.9031 16.35 9.2 13.6469 9.2 10.3125C9.2 8.02376 10.4735 6.03246 12.3506 5.00861C12.2345 5.00289 12.1176 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C13.9337 3 15.7276 3.61095 17.1955 4.65026L16.3442 6.4283C15.9937 6.32866 15.6227 6.275 15.2375 6.275C13.0077 6.275 11.2 8.08265 11.2 10.3125C11.2 12.5423 13.0077 14.35 15.2375 14.35C17.0038 14.35 18.5076 13.2152 19.0547 11.632L20.9999 11.9536C21 11.969 21 11.9845 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
			fill={iconColor}
		/>
	</svg>

	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11 19.75V22H13V19.75H11Z" fill={iconColor} />
		<path d="M11 2V4.25H13V2L11 2Z" fill={iconColor} />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
			fill={iconColor}
		/>
		<path d="M2 11H4.25V13H2V11Z" fill={iconColor} />
		<path d="M19.75 11H22V13H19.75V11Z" fill={iconColor} />
		<path
			d="M5.63604 4.22183L7.22703 5.81282L5.81281 7.22703L4.22182 5.63604L5.63604 4.22183Z"
			fill={iconColor}
		/>
		<path
			d="M18.1872 16.773L19.7782 18.364L18.364 19.7782L16.773 18.1872L18.1872 16.773Z"
			fill={iconColor}
		/>
		<path
			d="M5.81282 16.773L4.22183 18.364L5.63604 19.7782L7.22703 18.1872L5.81282 16.773Z"
			fill={iconColor}
		/>
		<path
			d="M18.364 4.22183L16.773 5.81282L18.1872 7.22703L19.7782 5.63604L18.364 4.22183Z"
			fill={iconColor}
		/>
	</svg>
</button>

<style>
	button {
		width: 45px;
		height: 24px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 3px;
		margin: 0;
		cursor: pointer;
	}
	button::before {
		content: '';
		position: absolute;
		width: 18px;
		height: 18px;
		border-radius: 9px;
	}
	button.light {
		background-color: #f2f8ff;
		border: 1px solid #313135;
		transition: all 0.3s ease-out;
	}
	button.dark {
		background-color: #1a2636;
		border: 1px solid #ffffff;
		transition: all 0.3s ease-out;
	}
	button.light::before {
		transform: translate(-1px);
		background-color: #0047b0;
		transition: all 0.3s ease-out;
	}
	button.dark::before {
		transform: translate(20px);
		background-color: #2e8fff;
		transition: all 0.3s ease-out;
	}
</style>
