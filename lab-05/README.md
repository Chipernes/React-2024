### 1. Централізований менеджмент стану з Valtio
- Централізований менеджмент стану гарантує, що стан програми є послідовним і легко доступним з будь-якого компонента.
- Об’єкт `state` визначено як `proxy` у коді, що дозволяє реактивні оновлення без необхідності додаткових стандартних редукторів.
```typescript
const state = proxy<{ tasks: Task[]; filterImportant: boolean }>({
  tasks: [],
  filterImportant: false,
});
```
- Приклад використання: компонент `TaskList` використовує `useSnapshot` для динамічного читання поточного стану завдань:
```typescript
const snap = useSnapshot(state);
const tasksToShow = snap.filterImportant
  ? snap.tasks.filter((task) => task.important)
  : snap.tasks;
```

### 2. Компонентна архітектура
- Розбиття програми на невеликі багаторазові компоненти покращує зручність обслуговування та масштабованість.
- Кожен елемент інтерфейсу користувача та логічна одиниця мають власний компонент, наприклад, `TaskInput`, `TaskList` і `TaskItem`.
- Приклад використання: всі компоненти є автономними блокоми.

### 3. Передача пропсів для ізольованого управління
- Компонент `TaskItem` отримує тільки необхідні дані (завдання через task) і функції (toggleTask, deleteTask) для управління станом.
- Відсутність прямого доступу до глобального стану зменшує залежність компонентів від контексту і підвищує їхню повторне використання.
- Чітке розмежування пропсів підвищує модульність і робить компоненти більш передбачуваними.

### 4. Розмежування UI та логіки
- Логіка стану (додавання, видалення, перемикання завдань) ізольована в функціях `addTask`, `deleteTask`, `toggleTask`, які визначені поза компонентами.
- UI-компоненти зосереджені виключно на відображенні стану та взаємодії з користувачем.
- Відокремлення логіки та UI робить код легшим для тестування й обслуговування.

### 5. Обробка стану компонентів на рівні локального стану
- Функціонал редагування завдань (`TaskItem`) використовує локальний стан через `useState` для управління формою редагування.
- Застосування локального стану ізолює логіку редагування лише в цьому компоненті, зменшуючи залежність від глобального стану.
- Локальний стан дозволяє зберігати дані, які потрібні лише одному компоненту, зменшуючи складність глобального менеджменту стану.

### 6. Використання контексту для глобальних налаштувань
- `ThemeContext` передає тему (світла/темна) і функцію її переключення через дерево компонентів.
- Використання контексту дозволяє уникнути "prop drilling" (передавання пропсів через проміжні компоненти) і забезпечує глобальну доступність налаштувань.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
