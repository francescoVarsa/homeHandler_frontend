import { ChangeEvent, useState } from "react"

export const useInput = (initVal: string | number | boolean) => {
    const [value, setValue] = useState(initVal)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return {value, onChange}
}