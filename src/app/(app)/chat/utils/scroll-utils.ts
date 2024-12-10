export function scrollToBottom(element: HTMLElement | null) {
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }
  