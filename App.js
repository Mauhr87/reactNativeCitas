import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet, 
  Modal,
  Pressable, 
  FlatList, 
  Alert
} from 'react-native';
import Formulario from './src/components/Formulario'
import Paciente from './src/components/Paciente'
import InformacionPaciente from './src/components/InformacionPaciente'


const App = () => {

  const [modalState, setModalState] = useState(false) 
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const [modalPaciente, setModalPaciente] = useState(false)

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter( paciente => paciente.id === id)
    setPaciente(pacienteEditar[0])

  }

  const pacienteEliminar = id => {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        {text: 'Cancelar'},
        {text: 'Si Eliminar', onPress: () => {
          const pacientesActualizados = pacientes.filter( pacienteState => pacienteState.id !== id)
          setPacientes(pacientesActualizados)
        }}
      ]
    )

  }

  const cerrarmodal = () => {
    setModalState(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => setModalState(!modalState)}
        style={styles.btnNuevaCita}
      >
        <Text
          style={styles.btnTextoNuevaCita}
        >Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? <Text style={styles.noPacientes}>No hay pacientes aún</Text> :
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <Paciente
                item={item}
                pacienteEditar={pacienteEditar}
                pacienteEliminar={pacienteEliminar}
                setModalState={setModalState}
                setPaciente={setPaciente}
                setModalPaciente={setModalPaciente}
              />
            )
          }}
        />
      }

      {modalState && (
        <Formulario
          cerrarmodal={cerrarmodal}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      )}

      <Modal
        animationType='fade'
        visible={modalPaciente}
        paciente={paciente}
      >
        <InformacionPaciente
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },  
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: 'bold'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6d28d9'
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#ffffff',
    fontSizeP: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
})

export default App;
