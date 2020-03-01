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

const SignUp = ({ navigation }) => {
	const emailRef = useRef();
	const passwordRef = useRef();

	return (
		<Background>
			<Container>
				<Image source={logo} />

				<Form>
					<FormInput
						icon="person-outline"
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Nome completo"
						returnKeyType="next"
						onSubmitEditing={() => emailRef.current.focus()}
					/>

					<FormInput
						icon="mail-outline"
						keyboardType="email-address"
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Digite seu e-mail"
						ref={emailRef}
						returnKeyType="next"
						onSubmitEditing={() => passwordRef.current.focus()}
					/>

					<FormInput
						icon="lock-outline"
						secureTextEntry
						placeholder="Sua senha secreta"
						ref={passwordRef}
						returnKeyType="next"
						onSubmitEditing={() => null}
					/>
					<SubmitButton>Criar conta</SubmitButton>
				</Form>

				<SignLink onPress={() => navigation.navigate('SignIn')}>
					<SignLinkText>Já tenho conta</SignLinkText>
				</SignLink>
			</Container>
		</Background>
	);
};

export default SignUp;
