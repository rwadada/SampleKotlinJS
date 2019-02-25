import org.w3c.dom.HTMLInputElement
import org.w3c.dom.NodeList
import org.w3c.dom.get

object Elements{
    private var mElements: Elements? = null
    private lateinit var input1Element: HTMLInputElement
    private lateinit var input2Element: HTMLInputElement
    private lateinit var selectorElement: HTMLInputElement

    fun getElements(): Elements {
        return if (mElements is Elements) {
            mElements as Elements
        } else {
            getElements(
                    ElementsList.INPUT1.value[0] as HTMLInputElement,
                    ElementsList.INPUT2.value[0] as HTMLInputElement,
                    ElementsList.SELECTOR.value
            )
            mElements as Elements
        }
    }

    private fun getElements(
            input1: HTMLInputElement,
            input2: HTMLInputElement,
            selector: NodeList
    ) {
        input1Element = input1
        input2Element = input2
        selectorElement = if((selector[0] as HTMLInputElement).checked) {
            selector[0] as HTMLInputElement
        } else {
            selector[1] as HTMLInputElement
        }

        mElements = this
    }

    fun getValues(): Map<String, String> {
        val valuesMap: MutableMap<String, String> = mutableMapOf()
        valuesMap.put("input1", input1Element.value)
        valuesMap.put("input2", input2Element.value)
        valuesMap.put("selector", selectorElement.value)

        return valuesMap
    }
}