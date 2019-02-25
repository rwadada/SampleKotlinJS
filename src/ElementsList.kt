import org.w3c.dom.NodeList
import kotlin.browser.document

enum class ElementsList(val value: NodeList) {
    INPUT1 (document.getElementsByName("input1")),
    INPUT2 (document.getElementsByName("input2")),
    SELECTOR (document.getElementsByName("selector"))
}