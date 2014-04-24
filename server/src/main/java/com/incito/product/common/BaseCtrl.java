package com.incito.product.common;

import java.util.HashMap;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * 控制层基类
 * @author zhaigt
 *
 */
public class BaseCtrl {
 
//  @Autowired
//  protected CarService carDao;
  
  @Autowired
  protected HttpServletRequest request;
  @Autowired
  protected HttpSession session;

  protected final String WEB_SESSION_USER = "webuser";
  
  /**
   * 获取当前用户信息
   * @return
   */
//  protected Agent getUser(){
//    return (Agent)session.getAttribute(WEB_SESSION_USER);
//  }
  
  /**
   * 获取请求参数 返回HashMap 格式
   * @return
   */
  protected HashMap<String, Object> getReqParamMap() {
      // 使用map接收页面表单参数信息
      HashMap<String, Object> params = new HashMap(request.getParameterMap()) ;
      
      // 由于接收的map值 Object 内容是String[]格式，在此需要格式转换
      Set<String> keys = params.keySet();
      for (String key : keys) {
        String value = "";
        Object valueObj = params.get(key);
        if(null == valueObj){
          value = "";
        }else if(valueObj instanceof String[]){
          String[] values = (String[])valueObj;
          for(int i=0;i<values.length;i++){
            value = values[i] + ",";
          }
          value = value.substring(0, value.length()-1);
        }else{
          value = valueObj.toString();
        }
        params.put(key, value);
    }
    return params;
  }
  
}
