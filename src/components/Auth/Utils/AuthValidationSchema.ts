import * as Yup from 'yup'


export const authValidationSchema = () => {
    return Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password must have min eight characters, at least one letter, one number and one special character")
    })
}