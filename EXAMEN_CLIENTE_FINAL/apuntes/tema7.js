//EVENTOS DEL DOM

DOMSubtreeModified//cuando añadimos o eliminamos nodos en el subárbol de un elemento o documento.
DOMNodeInserted//cuando añadimos un nodo hijo a un nodo padre.
DOMNodeRemoved//cuando eliminamos un nodo que tiene nodo padre.
DOMNodeRemovedFromDocument//cuando eliminamos un nodo del documento
DOMNodeInsertedIntoDocument//cuando añadimos un nodo al documento


/**
 * ¡Por supuesto! Las **expresiones regulares (regex)** son patrones utilizados para buscar y manipular texto. Se usan en muchos lenguajes de programación como Python, JavaScript, Java, y más.

---

## **1. Conceptos básicos**
Una expresión regular es una secuencia de caracteres especiales que representan un patrón de búsqueda.  

Ejemplo básico:  
La regex `hello` buscará la palabra `"hello"` en un texto.

---

## **2. Caracteres especiales**
| Símbolo | Descripción | Ejemplo |
|---------|------------|---------|
| `.` | Cualquier carácter excepto nueva línea | `h.t` → "hat", "hit", "hot" |
| `^` | Inicio de la línea | `^Hola` → Encuentra "Hola" al inicio |
| `$` | Fin de la línea | `mundo$` → Encuentra "mundo" al final |
| `*` | 0 o más repeticiones | `ab*` → "a", "ab", "abb", "abbb" |
| `+` | 1 o más repeticiones | `ab+` → "ab", "abb", "abbb" (pero no "a") |
| `?` | 0 o 1 repetición | `colou?r` → "color" o "colour" |
| `{n,m}` | Entre `n` y `m` repeticiones | `a{2,4}` → "aa", "aaa", "aaaa" |
| `[]` | Conjunto de caracteres permitidos | `[aeiou]` → Encuentra cualquier vocal |
| `|` | Alternativa (OR) | `rojo|azul` → "rojo" o "azul" |
| `()` | Agrupación | `(abc)+` → "abc", "abcabc", "abcabcabc" |

---

## **3. Clases de caracteres**
| Clase | Significado | Ejemplo |
|-------|------------|---------|
| `\d` | Cualquier dígito (0-9) | `\d+` → "123", "4567" |
| `\D` | Cualquier carácter NO numérico | `\D+` → "Hola", "ABC" |
| `\w` | Cualquier letra, número o guion bajo (`[a-zA-Z0-9_]`) | `\w+` → "hola_123" |
| `\W` | Cualquier carácter NO `\w` | `\W+` → " ,.;!" |
| `\s` | Cualquier espacio en blanco | `\s+` → " " (espacio) |
| `\S` | Cualquier carácter NO en blanco | `\S+` → "Hola123" |

---

## **4. Ejemplos en Python**
```python
import re

# Buscar una palabra en una cadena
texto = "Hola, mi número es 123456."
patron = r"\d+"  # Busca números

coincidencias = re.findall(patron, texto)
print(coincidencias)  # ['123456']
```

### **Reemplazar texto**
```python
texto = "La fecha es 2025-02-28."
patron = r"\d{4}-\d{2}-\d{2}"
nuevo_texto = re.sub(patron, "XX-XX-XX", texto)

print(nuevo_texto)  # "La fecha es XX-XX-XX."
```

### **Validar formato de email**
```python
patron_email = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
email = "ejemplo@correo.com"

if re.match(patron_email, email):
    print("Correo válido")
else:
    print("Correo inválido")
```

---

¿Tienes algún caso específico en el que necesites usar regex? 😊
 */