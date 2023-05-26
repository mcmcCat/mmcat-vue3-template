// 定义一下用户传递过来的options参数类型
export type Types = 'success' | 'warning' | 'error';
export interface Options {
  type?: Types; // 消息是Types类型
  message: string; // 消息是string类型
  duration?: number; // 延迟是number类型
}
