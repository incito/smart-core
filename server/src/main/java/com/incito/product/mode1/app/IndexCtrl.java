package com.incito.product.mode1.app;

import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.incito.product.common.BaseCtrl;

/**
 * pad端 接口Rest处理
 * @author zhaigt
 *
 */
@Controller
@RequestMapping("/")
public class IndexCtrl extends BaseCtrl{
  
  /**
   * pad端 接口Rest处理
   * 接收pad 接口请求
   */
  @RequestMapping("/index")
  @ResponseBody
  public HashMap<String,Object> index(){
    HashMap<String,Object> res = new HashMap<String,Object>();
    try {
      HashMap<String,Object> person = new HashMap<String,Object>();
      person.put("username", "taotao");
      person.put("address", "湖北");
      person.put("sex", "男");
      res.put("item", person);// 数据列表
      res.put("status", 1);// 成功
      res.put("msg", "hello");// 绑定变量
    } catch (Exception e) {
      e.printStackTrace();
    }
    return res;
  }
   
  
}
