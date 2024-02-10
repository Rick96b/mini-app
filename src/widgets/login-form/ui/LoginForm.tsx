import { DatePicker, DatePickerDateFormat, FormItem, Group, Input } from '@vkontakte/vkui'
import React from 'react'

import styles from './LoginForm.module.scss'
import { BaseButton } from 'shared/components';

interface LoginFormProps {
    changeUserData: (name: string, studyPlace:string, birthDate:DatePickerDateFormat) => void
}

const LoginForm:React.FC<LoginFormProps> = props => {
    const {
        changeUserData
    } = props

    const [name, setName] = React.useState('');
    const [studyPlace, setStudyPlace] = React.useState('');
    const [birthDate, setBirthDate] = React.useState<DatePickerDateFormat>({ day: 27, month: 9, year: 2004 });
  
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value }: {name: string, value: string} = e.currentTarget;
  
      const setStateAction = {
        name: setName,
        studyPlace: setStudyPlace,
      }[name];
  
      setStateAction && setStateAction(value);
    };
  
    return (
        <div className={styles.container} >
            <h2 className={styles.title}>Немного о себе</h2>
            <Group>
                <form onSubmit={(e) => {
                    e.preventDefault(); 
                    changeUserData(name, studyPlace, birthDate)
                }} className={styles.form}>
                    <FormItem
                        htmlFor="name"
                        top="ФИО"
                        required
                    >
                        <Input
                            aria-labelledby="name-type"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            required
                            onChange={onChange}
                            placeholder="Введите ФИО" 
                        />
                    </FormItem>

                    <FormItem 
                        top="Место учебы" 
                        htmlFor="studyPlace"
                        required
                    >
                        <Input 
                            id="studyPlace" 
                            type="text" 
                            name="studyPlace"
                            value={studyPlace}
                            required
                            onChange={onChange}
                            placeholder="Введите место учебы" 
                        />
                    </FormItem>

                    <FormItem 
                        top="Дата рождения" 
                        htmlFor="birthDate"
                        required
                    >
                        <DatePicker
                            min={{ day: 1, month: 1, year: 1901 }}
                            max={{ day: 1, month: 1, year: 2012 }}
                            onDateChange={(value) => {
                                setBirthDate(value)
                            }}
                            dayPlaceholder="ДД"
                            monthPlaceholder="ММММ"
                            yearPlaceholder="ГГГГ"
                        />
                    </FormItem>   

                    <BaseButton type='submit'>
                        Отправить
                    </BaseButton> 
                </form>
            </Group>
        </div>
    )
}

export default LoginForm