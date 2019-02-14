import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTextAreaElement
import org.w3c.dom.get
import kotlin.browser.document

var inputList: MutableList<Input> = mutableListOf()

fun main (args: Array<String>) {
    println("Hello Kotlin/JS!")
}

fun sample() {
    val input1: HTMLInputElement = document.getElementsByName("input1")[0] as HTMLInputElement
    val input2: HTMLInputElement = document.getElementsByName("input2")[0] as HTMLInputElement
    val selector1: HTMLInputElement =
            if ((document.getElementsByName("selector")[0] as HTMLInputElement).checked) {
                document.getElementsByName("selector")[0] as HTMLInputElement
            } else {
                document.getElementsByName("selector")[1] as HTMLInputElement
            }
    println(input1.value + input2.value + selector1.value)
    println("Sample")
    val textArea = document.getElementsByName("textArea")[0]
    println(textArea)
}

fun add() {
    val input1: HTMLInputElement = document.getElementsByName("input1")[0] as HTMLInputElement
    val input2: HTMLInputElement = document.getElementsByName("input2")[0] as HTMLInputElement
    val selector1: HTMLInputElement =
            if ((document.getElementsByName("selector")[0] as HTMLInputElement).checked) {
                document.getElementsByName("selector")[0] as HTMLInputElement
            } else {
                document.getElementsByName("selector")[1] as HTMLInputElement
            }
    if (input1.value == "" || input2.value == ""){
        return
    }
    inputList.add(Input(
            input1.value,
            input2.value,
            selector1.value
    ))
    input1.value = ""
    input2.value = ""
    selector1.checked = false

    val textArea: HTMLTextAreaElement = document.getElementsByName("textArea")[0] as HTMLTextAreaElement
    var text: String = "{["
    for (input in inputList) {
        val item = """
            {
                "input1": "${input.input1}",
                "input2": "${input.input2}",
                "selector1": "${input.selector1}"
            },
        """.trimIndent()
        text += item
    }

    text = text.substring(0, text.length-1)
    text += "]}"

    textArea.value = text
}

fun clear() {
    val input1: HTMLInputElement = document.getElementsByName("input1")[0] as HTMLInputElement
    val input2: HTMLInputElement = document.getElementsByName("input2")[0] as HTMLInputElement
    val selector1: HTMLInputElement =
            if ((document.getElementsByName("selector")[0] as HTMLInputElement).checked) {
                document.getElementsByName("selector")[0] as HTMLInputElement
            } else {
                document.getElementsByName("selector")[1] as HTMLInputElement
            }
    val textArea: HTMLTextAreaElement = document.getElementsByName("textArea")[0] as HTMLTextAreaElement
    input1.value = ""
    input2.value = ""
    selector1.checked = false
    textArea.value = ""
    inputList = mutableListOf()
}
data class Input(
        val input1: String,
        val input2: String,
        val selector1: String
)