import {AxiosHeaders} from 'axios';

export type method = 'get' | 'post' | 'patch' | 'delete' | 'put';

export interface invokeAPICommonArgs {
  /**
   * restAPI 요청 메서드(get, post, put, patch, delete)
   */
  method: method;
  /**
   * 내부 호스트 API 요청 시 기본 API 경로
   */
  path: string;
}

export interface invokeAPICommonSecondArgs {
  /**
   * 내부 호스트 API 요청 시 추가로 붙어야 할 경로 또는 Query string
   */
  subPath?: string;
  /**
   * API 호출 시 넘어가야 할 데이터
   *
   * - API 명세서(Swagger 기준)에 적혀있는 요청 데이터 중 "query"라고 적혀있는 데이터는 여기에 적용해줘야 함!!
   */
  params?: any;
  /**
   * API 호출 시 요청 데이터
   *
   * - API 명세서(Swagger 기준)에 적혀있는 요청 데이터 중 "body"라고 적혀있는 데이터는 여기에 적용해줘야 함!!
   */
  data?: any;
}

export interface invokeExternalAPIArgs {
  /**
   * restAPI 요청 메서드(get, post, put, patch, delete)
   */
  method: method;
  /**
   * API 경로(http 포함)
   */
  url: string;
  /**
   * API 호출 시 넘어가야 할 데이터
   *
   * - API 명세서(Swagger 기준)에 적혀있는 요청 데이터 중 "query"라고 적혀있는 데이터는 여기에 적용해줘야 함!!
   */
  params?: any;
  /**
   * API 호출 시 요청 데이터
   *
   * - API 명세서(Swagger 기준)에 적혀있는 요청 데이터 중 "body"라고 적혀있는 데이터는 여기에 적용해줘야 함!!
   */
  data?: any;
  /**
   * 외부 API 호출 시 사용할 Header
   *
   * 필요시에만 사용할 것!!!
   */
  headers?: AxiosHeaders;
}
