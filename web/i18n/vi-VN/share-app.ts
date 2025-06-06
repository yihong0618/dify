const translation = {
  common: {
    welcome: '',
    appUnavailable: 'Ứng dụng không khả dụng',
    appUnknownError: 'Ứng dụng gặp lỗi không xác định',
  },
  chat: {
    newChat: 'Cuộc trò chuyện mới',
    pinnedTitle: 'Đã ghim',
    unpinnedTitle: 'Trò chuyện',
    newChatDefaultName: 'Cuộc trò chuyện mới',
    resetChat: 'Đặt lại cuộc trò chuyện',
    poweredBy: 'Được cung cấp bởi',
    prompt: 'Lời nhắc',
    privatePromptConfigTitle: 'Cài đặt cuộc trò chuyện',
    publicPromptConfigTitle: 'Lời nhắc ban đầu',
    configStatusDes: 'Trước khi bắt đầu, bạn có thể chỉnh sửa cài đặt cuộc trò chuyện',
    configDisabled: 'Cài đặt của phiên trước đã được sử dụng cho phiên này.',
    startChat: 'Bắt đầu trò chuyện',
    privacyPolicyLeft: 'Vui lòng đọc ',
    privacyPolicyMiddle: 'chính sách bảo mật',
    privacyPolicyRight: ' được cung cấp bởi nhà phát triển ứng dụng.',
    deleteConversation: {
      title: 'Xóa cuộc trò chuyện',
      content: 'Bạn có chắc muốn xóa cuộc trò chuyện này không?',
    },
    tryToSolve: 'Thử giải quyết',
    temporarySystemIssue: 'Xin lỗi, hệ thống đang gặp sự cố tạm thời.',
    expand: 'Mở rộng',
    collapse: 'Thu gọn',
    chatFormTip: 'Cài đặt trò chuyện không thể được thay đổi sau khi cuộc trò chuyện đã bắt đầu.',
    newChatTip: 'Đã ở trong một cuộc trò chuyện mới',
    viewChatSettings: 'Xem cài đặt trò chuyện',
    chatSettingsTitle: 'Cài đặt trò chuyện mới',
  },
  generation: {
    tabs: {
      create: 'Tạo đơn lẻ',
      batch: 'Tạo hàng loạt',
      saved: 'Đã lưu',
    },
    savedNoData: {
      title: 'Bạn chưa lưu kết quả nào!',
      description: 'Bắt đầu tạo nội dung và tìm kết quả đã lưu của bạn ở đây.',
      startCreateContent: 'Bắt đầu tạo nội dung',
    },
    title: 'Hoàn thiện AI',
    queryTitle: 'Nội dung truy vấn',
    completionResult: 'Kết quả hoàn thiện',
    queryPlaceholder: 'Nhập nội dung truy vấn của bạn...',
    run: 'Thực thi',
    copy: 'Sao chép',
    resultTitle: 'Kết quả AI',
    noData: 'AI sẽ hiển thị kết quả ở đây.',
    csvUploadTitle: 'Kéo và thả tệp CSV của bạn vào đây, hoặc ',
    browse: 'chọn tệp',
    csvStructureTitle: 'Tệp CSV phải tuân thủ cấu trúc sau:',
    downloadTemplate: 'Tải xuống mẫu tại đây',
    field: 'Trường',
    batchFailed: {
      info: '{{num}} lần thực thi thất bại',
      retry: 'Thử lại',
      outputPlaceholder: 'Không có nội dung đầu ra',
    },
    errorMsg: {
      empty: 'Vui lòng nhập nội dung vào tệp đã tải lên.',
      fileStructNotMatch: 'Cấu trúc tệp CSV tải lên không khớp.',
      emptyLine: 'Dòng {{rowIndex}} trống',
      invalidLine: 'Dòng {{rowIndex}}: {{varName}} không thể để trống',
      moreThanMaxLengthLine: 'Dòng {{rowIndex}}: {{varName}} không thể chứa quá {{maxLength}} ký tự',
      atLeastOne: 'Vui lòng nhập ít nhất một dòng vào tệp đã tải lên.',
    },
    executions: '{{num}} ÁN TỬ HÌNH',
    execution: 'THI HÀNH',
  },
  login: {
    backToHome: 'Trở về Trang Chủ',
  },
}

export default translation
