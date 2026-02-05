import { ref } from 'vue'

// Remove Confirmation Modal related functions
export function useRemoveConfirmationModal(
  // estensiionName: The name of the extension to be removed
  // - emitted from the extension modal component when the remove confirmation button is clicked
  onConfirm: (extensionName: string) => void, // function to be called when the confirm button is clicked
) {
  const isModalOpen = ref(false)
  const selectedExtensionName = ref('')

  const openModal = (extensionName: string) => {
    selectedExtensionName.value = extensionName
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
    selectedExtensionName.value = ''
  }

  // after the confirm button is clicked, remove the extension from the localStorage
  const confirmRemove = (extensionName: string) => {
    onConfirm(extensionName)
    closeModal()
  }

  return {
    isModalOpen,
    selectedExtensionName,
    openModal,
    closeModal,
    confirmRemove,
  }
}
