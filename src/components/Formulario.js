import React, {useState} from 'react'
import {Button, Modal, Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView} from 'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({modalState}) => {

  const [paciente, setPaciente] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fecha, setFecha] = useState(new Date())
  const [sintomas, setSintomas] = useState('')

  return (
    <Modal
    animationType='slide'
    visible={modalState}
    >
    <SafeAreaView style={styles.contenido}>
      <Text style={styles.titulo}>Nueva {''}
        <Text style={styles.tituloBold}>Cita</Text>
      </Text>
      <ScrollView> 
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Paciente</Text>
          <TextInput
            style={styles.input}
            placeholder='Nombre Paciente'
            placeholderTextColor={'#666'}
            value={paciente}
            onChangeText={setPaciente}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Propietario</Text>
          <TextInput
            style={styles.input}
            placeholder='Nombre Propietario'
            placeholderTextColor={'#666'}
            value={propietario}
            onChangeText={setPropietario}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email Propietario</Text>
          <TextInput
            style={styles.input}
            placeholder='Email Propietario'
            placeholderTextColor={'#666'}
            keyboardType={'email-address'}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Teléfono Propietario</Text>
          <TextInput
            style={styles.input}
            placeholder='Teléfono Propietario'
            placeholderTextColor={'#666'}
            keyboardType={'number-pad'}
            value={telefono}
            onChangeText={setTelefono}
            maxLength={10}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha Alta</Text>
          <DatePicker
            date={fecha}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Síntomas Paciente</Text>
          <TextInput
            style={[styles.input, styles.sintomasInput]}
            placeholder='Síntomas Paciente'
            placeholderTextColor={'#666'}
            value={sintomas}
            onChangeText={setSintomas}
            multiline={true}
            numberOfLines={4}
          />
        </View>

      </ScrollView> 
    </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6d28d9',
    flex: 1
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
    color: '#fff'
  }, 
  tituloBold: {
    fontWeight: '900'
  },
  campo: {
    marginHorizontal: 30,
    marginBottom: 10
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600'
  }, 
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10
  },
  sintomasInput: {
    height: 100
  }
})

export default Formulario