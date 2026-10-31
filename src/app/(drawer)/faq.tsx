import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const faqData = [
  {
    title: 'Навчальний процес',
    data: [
      { id: '1', question: 'Як дізнатися розклад пар?', answer: 'Розклад доступний на навчальному порталі у розділі "Мій розклад" або у відповідному Telegram-боті університету.' },
      { id: '2', question: 'Де знайти матеріали лекцій?', answer: 'Усі матеріали завантажуються викладачами в систему дистанційного навчання (наприклад, Moodle).' },
      { id: '3', question: 'Як перевірити свої бали?', answer: 'Ваші бали та поточна успішність відображаються в електронному кабінеті студента на порталі.' },
    ],
  },
  {
    title: 'Технічна підтримка',
    data: [
      { id: '4', question: 'Як відновити пароль до порталу?', answer: 'Скористайтеся функцією "Забули пароль" на сторінці входу. Інструкція щодо відновлення прийде на вашу корпоративну пошту.' },
      { id: '5', question: 'Не працює корпоративна пошта', answer: 'Зверніться до інформаційно-обчислювального центру (ІОЦ) або напишіть запит на support@ztu.edu.ua.' },
      { id: '6', question: 'Як підключитися до Wi-Fi?', answer: 'Використовуйте свій корпоративний email як логін та пароль від порталу для підключення до загальноуніверситетської мережі.' },
    ],
  },
];

export default function FAQScreen() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={faqData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index, section }) => {
          const isExpanded = expandedId === item.id;
          const isLast = index === section.data.length - 1;

          return (
            <View style={[styles.itemWrapper, isLast && styles.lastItemWrapper]}>
              <TouchableOpacity
                style={[
                  styles.item,
                  isLast && !isExpanded && styles.lastItem
                ]}
                activeOpacity={0.7}
                onPress={() => toggleExpand(item.id)}
              >
                <Text style={styles.itemText}>{item.question}</Text>
                <Ionicons
                  name={isExpanded ? "chevron-down" : "chevron-forward"}
                  size={20}
                  color="#ccc"
                />
              </TouchableOpacity>

              {isExpanded && (
                <View style={[styles.answerContainer, isLast && styles.lastItemAnswer]}>
                  <Text style={styles.answerText}>{item.answer}</Text>
                </View>
              )}
            </View>
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  listContainer: { padding: 15 },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#002855',
    textTransform: 'uppercase',
    marginTop: 15,
    marginBottom: 8,
    paddingHorizontal: 5
  },
  itemWrapper: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastItemWrapper: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  lastItem: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  itemText: { fontSize: 15, color: '#333', fontWeight: '500', flex: 1, paddingRight: 10 },
  answerContainer: {
    padding: 16,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  lastItemAnswer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  answerText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  }
});