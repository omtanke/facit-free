import React from 'react';
import Card, {
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import { useFormik } from 'formik';
import Button from '../../../../components/bootstrap/Button';

const validate = (values: { userName: string; emailAddress: string }) => {
	const errors: {
		userName?: string;
		emailAddress?: string;
	} = {};

	/**
	 * Conditions for userName
	 */
	if (!values.userName) {
		errors.userName = 'Required';
	} else if (values.userName.length > 15) {
		errors.userName = 'Must be 15 characters or less';
	}

	/**
	 * Conditions for emailAddress
	 */
	if (!values.emailAddress) {
		errors.emailAddress = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
		errors.emailAddress = 'Invalid email address';
	}

	return errors;
};

const ExampleForm = () => {
	const formik = useFormik({
		initialValues: {
			userName: '',
			emailAddress: '',
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div className='row'>
			<div className='col-12'>
				<Card tag='form' noValidate onSubmit={formik.handleSubmit}>
					<CardHeader>
						<CardLabel icon='CheckBox' iconColor='info'>
							<CardTitle>Example Form</CardTitle>
						</CardLabel>
					</CardHeader>
					<CardBody>
						<div className='row'>
							<div className='col-md-6'>
								<FormGroup id='userName' label='User Name'>
									<Input
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.userName}
										isValid={formik.isValid}
										isTouched={formik.touched.userName}
										invalidFeedback={formik.errors.userName}
										validFeedback='Looks good!'
									/>
								</FormGroup>
							</div>
							<div className='col-md-6'>
								<FormGroup id='emailAddress' label='Email Address'>
									<Input
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.emailAddress}
										isValid={formik.isValid}
										isTouched={formik.touched.emailAddress}
										invalidFeedback={formik.errors.emailAddress}
										validFeedback='Looks good!'
									/>
								</FormGroup>
							</div>
						</div>
					</CardBody>
					<CardFooter>
						<CardFooterLeft>
							<Button type='reset' color='dark' isLink onClick={formik.resetForm}>
								Reset form
							</Button>
						</CardFooterLeft>
						<CardFooterRight>
							<Button
								type='submit'
								color='info'
								isDisable={!formik.isValid && !!formik.submitCount}>
								Submit form
							</Button>
						</CardFooterRight>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default ExampleForm;
