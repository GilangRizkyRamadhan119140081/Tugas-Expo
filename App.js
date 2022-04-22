//GilangRizkyRamadhan119140081
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isChecked, setChecked] = useState(false);

  return (

    <View style={styles.container}>
    <Text style={styles.headliner}>RESEP MAKANAN DIGITAL</Text>
      <View style={styles.section}>
        <Text style={styles.headline}>Progres</Text>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Tuntas</Text>
       

      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#eb4334' : undefined}
        />
        <Text style={styles.paragraph}>Nasi Goreng Biasa</Text>
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Cabe Rawit 100gram</Text>
      </View>
       <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Bawang Merah 3 Siung</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Bawang Putih 2 Siung</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Garam 1 Sendok Teh</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Penyedap 1/2 Sendok Teh</Text>
      </View>



      <View style={styles.section}>
        <Text style={styles.headline}>Progres</Text>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Tuntas</Text>
       

      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#eb4334' : undefined}
        />
        <Text style={styles.paragraph}>Nasi Goreng Pedas</Text>
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Cabe Rawit 100gram</Text>
      </View>
       <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Bawang Merah 3 Siung</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Bawang Putih 2 Siung</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Garam 1 Sendok Teh</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Penyedap 1/2 Sendok Teh</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headline}>Progres</Text>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Tuntas</Text>
       

      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#eb4334' : undefined}
        />
        <Text style={styles.paragraph}>Nasi Goreng Ekstra Pedas</Text>
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Cabe Rawit 100gram</Text>
      </View>
       <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Bawang Merah 3 Siung</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Bawang Putih 2 Siung</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Garam 1 Sendok Teh</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Penyedap 1/2 Sendok Teh</Text>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 55,
    borderColor: '#0000',
    backgroundColor: '#095199',
  },
  headliner: {
    color: '#000',
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 4,
  },
  headline: {
    color: '#000',
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 4,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 12,
  },
  checkbox: {
    margin: 6,
  },
  title: {
 

  },
});