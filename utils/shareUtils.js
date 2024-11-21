import { Share, Linking } from 'react-native';

export const handleNativeShare = async (message, title) => {
  try {
    await Share.share({
      message,
      title,
    });
  } catch (error) {
    console.error('Error sharing:', error);
  }
};

export const handleWhatsAppShare = (message) => {
  const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
  Linking.canOpenURL(whatsappUrl)
    .then((supported) => {
      if (supported) {
        Linking.openURL(whatsappUrl);
      } else {
        alert('WhatsApp is not installed on this device.');
      }
    })
    .catch((error) => console.error('Error opening WhatsApp:', error));
};

export const handleTelegramShare = (message) => {
  const telegramUrl = `tg://msg?text=${encodeURIComponent(message)}`;
  Linking.canOpenURL(telegramUrl)
    .then((supported) => {
      if (supported) {
        Linking.openURL(telegramUrl);
      } else {
        alert('Telegram is not installed on this device.');
      }
    })
    .catch((error) => console.error('Error opening Telegram:', error));
};
