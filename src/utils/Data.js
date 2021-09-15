export const getPeakPriceDays = ()=> {
    let peakPrice = [];
    peakPrice.push({day: "M", isSelected: true})
    peakPrice.push({day: "T", isSelected: false})
    peakPrice.push({day: "W", isSelected: false})
    peakPrice.push({day: "T", isSelected: true})
    peakPrice.push({day: "F", isSelected: false})
    peakPrice.push({day: "S", isSelected: true})
    peakPrice.push({day: "S", isSelected: false})
    // peakPrice.push("M")
    // peakPrice.push("T")
    // peakPrice.push("W")
    // peakPrice.push("T")
    // peakPrice.push("F")
    // peakPrice.push("S")
    // peakPrice.push("S")
    return peakPrice;
}