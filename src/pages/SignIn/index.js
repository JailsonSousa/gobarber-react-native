import React, { useRef } from 'react';

import { Image } from 'react-native';
import Background from '~/components/Background';
import logo from '~/assets/logo.png';

import {
	Container,
	Form,
	FormInput,
	SubmitButton,
	SignLink,
	SignLinkText,
} from './styles';

const SignIn = ({ navigation }) => {
	const passwordRef = useRef();

	return (
		<Background>
			<Container>
				<Image source={logo} />

				<Form>
					<FormInput
						icon="mail-outline"
						keyboardType="email-address"
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Digite seu e-mail"
						returnKeyType="next"
						onSubmitEditing={() => passwordRef.current.focus()}
					/>

					<FormInput
						icon="lock-outline"
						secureTextEntry
						placeholder="Sua senha secreta"
						ref={passwordRef}
						returnKeyType="send"
						onSubmitEditing={() => passwordRef.current.focus()}
					/>
					<SubmitButton>Acessar</SubmitButton>
				</Form>

				<SignLink onPress={() => navigation.navigate('SignUp')}>
					<SignLinkText>Criar conta gratuita</SignLinkText>
				</SignLink>
			</Container>
		</Background>
	);
};

export default SignIn;
