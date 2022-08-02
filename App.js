import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet, 
  Modal,
  Pressable, 
  FlatList
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';


const App = () => {

  const [modalState, setModalState] = useState(false) 
  const [pacientes, setPacientes] = useState([])

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
              />
            )
          }}
        />
      }

      <Formulario
        modalState={modalState}
        setModalState={setModalState}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
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
