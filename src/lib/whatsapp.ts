const whatsappNumber = "51918717771";

export function whatsappLink(message: string, number = whatsappNumber) {
  return `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
