export interface DropdownItem {
  id?: string
  title: string
  icon?: string
  rightIcon?: string
  rightContent?: string
  disabled?: boolean
  // Runs when the item is clicked, before item-click is emitted
  action?: () => void
  data?: any
}

export interface DropdownSection {
  title?: string
  items: DropdownItem[]
}
