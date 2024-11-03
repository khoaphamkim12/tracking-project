/* eslint-disable no-undef */
/**
* Hàm format số
 * @param {number} number - Số cần định dạng
 * @param {string} locale - Ngôn ngữ để định dạng (mặc định là 'en-US')
 * @param {Object} options - Tùy chọn định dạng
 * @returns {string} - Số đã được định dạng
 */
export const formatNumber = (number, locale = 'en-US', options = {}) => {
    return new Intl.NumberFormat(locale, options).format(number);
};