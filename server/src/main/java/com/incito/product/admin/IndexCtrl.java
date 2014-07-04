package com.incito.product.admin;

import java.util.HashMap;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.incito.product.common.BaseCtrl;

/**
 * 后台端 请求处理
 * 
 * @author zhaigt
 * 
 */
@RestController
@RequestMapping("/")
public class IndexCtrl extends BaseCtrl {

  /**
   * 后台首页-登录
   */
  @RequestMapping("")
  public ModelAndView loginindex() {
    ModelAndView res = new ModelAndView("login");//对应 login.jsp
    try {
      // todo something...
      
    } catch (Exception e) {
      e.printStackTrace();
    }
    return res;
  }
  
  /**
   * 后台首页-登录
   */
  @RequestMapping("/login")
  public ModelAndView login() {
    ModelAndView res = new ModelAndView("redirect:index");// 登录成功 跳转到 index 
    try {
      // todo something...
      // res.setViewName("login");// 验证失败 跳转到 login.jsp
    } catch (Exception e) {
      e.printStackTrace();
    }
    return res;
  }
  
  /**
   * 后台首页展示
   */
  @RequestMapping("/index")
  public ModelAndView index() {
    ModelAndView res = new ModelAndView("index");
    try {
      HashMap<String, Object> person = new HashMap<String, Object>();
      person.put("username", "taotao");
      person.put("address", "湖北");
      person.put("sex", "男");
      
      res.addObject("item", person);// 数据列表
    } catch (Exception e) {
      e.printStackTrace();
    }
    return res;
  }

}
